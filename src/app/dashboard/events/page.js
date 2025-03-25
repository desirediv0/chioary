"use client";

import { useEffect, useState } from "react";
import { DataTable } from "@/components/ui/DataTable";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { PlusCircle, Pencil, Trash2 } from "lucide-react";
import Image from "next/image";
import { formatDate } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";
import { getImageUrl } from "../../../../utils/imageHelpers";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

const EventsPage = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [eventToDelete, setEventToDelete] = useState(null);
    const router = useRouter();
    const { toast } = useToast();

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            const response = await fetch("/api/events?limit=50");
            const data = await response.json();
            setEvents(data.events);
            setLoading(false);
        } catch (error) {
            console.error("Failed to fetch events:", error);
            setLoading(false);
        }
    };

    const handleDeleteClick = (event, e) => {
        // Stop event propagation to prevent navigation
        e.stopPropagation();
        setEventToDelete(event);
        setShowDeleteDialog(true);
    };

    const confirmDelete = async () => {
        if (!eventToDelete) return;

        try {
            // Delete the event directly using the API endpoint
            const response = await fetch(`/api/events/delete/${eventToDelete.id}`, {
                method: "DELETE",
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Failed to delete event");
            }

            // Show success toast
            toast({
                title: "Event deleted",
                description: "The event has been deleted successfully",
            });

            // Close the dialog and reset state
            setShowDeleteDialog(false);
            setEventToDelete(null);

            // Refresh the events list
            fetchEvents();
        } catch (error) {
            console.error("Error deleting event:", error);
            toast({
                title: "Error",
                description: error.message || "Failed to delete the event",
                variant: "destructive",
            });
            setShowDeleteDialog(false);
            setEventToDelete(null);
        }
    };

    const cancelDelete = () => {
        setShowDeleteDialog(false);
        setEventToDelete(null);
    };

    const columns = [
        {
            accessorKey: "thumbnail",
            header: "Thumbnail",
            cell: ({ row }) => {
                const thumbnailUrl = getImageUrl(row.original.thumbnail);
                return (
                    <div className="relative h-12 w-16 overflow-hidden rounded">
                        <Image
                            src={thumbnailUrl}
                            alt={row.original.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                );
            },
        },
        {
            accessorKey: "title",
            header: "Title",
        },
        {
            accessorKey: "shortDescription",
            header: "Description",
            cell: ({ row }) => {
                const description = row.original.shortDescription || "";
                return <div className="truncate max-w-xs">{description}</div>;
            },
        },
        {
            accessorKey: "startDate",
            header: "Date",
            cell: ({ row }) => formatDate(row.original.startDate),
        },
        {
            id: "actions",
            header: "Actions",
            cell: ({ row }) => {
                return (
                    <div className="flex gap-2">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={(e) => {
                                e.stopPropagation();
                                router.push(`/dashboard/events/edit/${row.original.id}`);
                            }}
                        >
                            <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={(e) => handleDeleteClick(row.original, e)}
                            className="text-red-500"
                        >
                            <Trash2 className="h-4 w-4" />
                        </Button>
                    </div>
                );
            },
        },
    ];

    if (loading) {
        return <div className="text-center p-6">Loading events...</div>;
    }

    return (
        <div className="container mx-auto p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Events</h1>
                <Button onClick={() => router.push("/dashboard/events/create")}>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Create Event
                </Button>
            </div>

            <DataTable
                columns={columns}
                data={events}
                filterColumn="title"
                onRowClick={(event) =>
                    router.push(`/dashboard/events/edit/${event.id}`)
                }
            />

            <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Delete Event</DialogTitle>
                        <DialogDescription>
                            Are you sure you want to delete this event? This action cannot be undone.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button variant="outline" onClick={cancelDelete}>
                            Cancel
                        </Button>
                        <Button variant="destructive" onClick={confirmDelete}>
                            Delete
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default EventsPage;
