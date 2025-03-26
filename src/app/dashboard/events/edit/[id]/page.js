"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ReactQuillEditor } from "@/components/ReactQuillEditor";
import { FileUploader } from "@/components/FileUploader";
import { useToast } from "@/components/ui/use-toast";
import { getImageUrl } from "../../../../../../utils/imageHelpers";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EditEventPage = ({ params }) => {
    const eventId = params.id;
    const router = useRouter();
    const { toast } = useToast();

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [event, setEvent] = useState(null);
    const [formData, setFormData] = useState({
        title: "",
        slug: "",
        shortDescription: "",
        description: "",
        location: "",
        startDate: "",
        endDate: "",
        timing: "",
        videoUrl: "",
    });

    const [thumbnail, setThumbnail] = useState(null);
    const [newImages, setNewImages] = useState([]);
    const [existingImages, setExistingImages] = useState([]);
    const [imagesToDelete, setImagesToDelete] = useState([]);

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const response = await fetch(`/api/events/id/${eventId}`);
                if (!response.ok) throw new Error("Failed to fetch event");

                const data = await response.json();
                setEvent(data);

                // Format dates for date input
                const formatDate = (dateStr) => {
                    if (!dateStr) return "";
                    const date = new Date(dateStr);
                    return date.toISOString().split('T')[0]; // Format as YYYY-MM-DD
                };

                // Extract time from timing field (stored as HH:MM)
                const timing = data.timing || "";

                setFormData({
                    title: data.title || "",
                    slug: data.slug || "",
                    shortDescription: data.shortDescription || "",
                    description: data.description || "",
                    location: data.location || "",
                    startDate: formatDate(data.startDate),
                    endDate: formatDate(data.endDate),
                    timing: timing, // Use the extracted time
                    videoUrl: data.videoUrl || "",
                });

                setExistingImages(data.images || []);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching event:", error);
                toast({
                    title: "Error",
                    description: "Failed to load event data",
                    variant: "destructive",
                });
                setLoading(false);
            }
        };

        if (eventId) fetchEvent();
    }, [eventId, toast]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleDescriptionChange = (content) => {
        setFormData((prev) => ({ ...prev, description: content }));
    };

    const handleShortDescriptionChange = (content) => {
        setFormData((prev) => ({ ...prev, shortDescription: content }));
    };

    const handleThumbnailChange = (file) => {
        setThumbnail(file);
    };

    const handleImagesChange = (files) => {
        setNewImages(files);
    };

    const removeExistingImage = (imageId) => {
        setExistingImages((prev) => prev.filter((img) => img.id !== imageId));
        setImagesToDelete((prev) => [...prev, imageId]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);

        try {
            const formDataToSend = new FormData();

            // Add text fields
            Object.keys(formData).forEach((key) => {
                formDataToSend.append(key, formData[key]);
            });

            // Add thumbnail if changed
            if (thumbnail) {
                formDataToSend.append("thumbnail", thumbnail);
            }

            // Add new images
            newImages.forEach((image) => {
                formDataToSend.append("newImages", image);
            });

            // Add image IDs to delete
            imagesToDelete.forEach((id) => {
                formDataToSend.append("deleteImages", id);
            });

            const response = await fetch(`/api/events/update/${eventId}`, {
                method: "PUT",
                body: formDataToSend,
            });

            const data = await response.json();

            if (response.ok) {
                toast({
                    title: "Event updated",
                    description: "Your event has been updated successfully",
                });
                router.push("/dashboard/events");
            } else {
                throw new Error(data.error || "Failed to update event");
            }
        } catch (error) {
            console.error("Error updating event:", error);
            toast({
                title: "Error",
                description: error.message || "Failed to update event",
                variant: "destructive",
            });
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return <div className="text-center p-6">Loading event data...</div>;
    }

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-8">Edit Event</h1>

            <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="title">Title</Label>
                        <Input
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* <div className="space-y-2">
                        <Label htmlFor="slug">Slug</Label>
                        <Input
                            id="slug"
                            name="slug"
                            value={formData.slug}
                            onChange={handleChange}
                            required
                        />
                    </div> */}

                    <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input
                            id="location"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="startDate">Start Date</Label>
                        <Input
                            id="startDate"
                            name="startDate"
                            type="date"
                            value={formData.startDate}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="endDate">End Date</Label>
                        <Input
                            id="endDate"
                            name="endDate"
                            type="date"
                            value={formData.endDate}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="timing">Time</Label>
                        <Input
                            id="timing"
                            name="timing"
                            type="time"
                            value={formData.timing}
                            onChange={handleChange}
                        />
                        <p className="text-sm text-muted-foreground">Event start time</p>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="videoUrl">Video URL</Label>
                        <Input
                            id="videoUrl"
                            name="videoUrl"
                            value={formData.videoUrl}
                            onChange={handleChange}
                            placeholder="Enter YouTube or Vimeo video URL"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label>Short Description</Label>
                    <ReactQuillEditor
                        value={formData.shortDescription}
                        onChange={handleShortDescriptionChange}
                        config={{
                            height: 200,
                            modules: {
                                toolbar: [
                                    [{ header: [1, 2, 3, 4, 5, 6, false] }],
                                    ["bold", "italic", "underline", "strike"],
                                    [{ list: "ordered" }, { list: "bullet" }],
                                    [{ color: [] }, { background: [] }],
                                    ["link", "image"],
                                    ["clean"],
                                ]
                            }
                        }}
                    />
                </div>

                <div className="space-y-2">
                    <Label>Full Description</Label>
                    <ReactQuillEditor
                        value={formData.description}
                        onChange={handleDescriptionChange}
                    />
                </div>

                <div className="space-y-2">
                    <Label>Thumbnail</Label>
                    <FileUploader
                        accept="image/*"
                        onFileChange={handleThumbnailChange}
                        multiple={false}
                        existingFiles={event.thumbnail ? [{ id: 'thumbnail', url: getImageUrl(event.thumbnail) }] : []}
                        onRemoveExisting={() => setThumbnail(null)}
                    />
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Images</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <FileUploader
                            accept="image/*"
                            onFileChange={handleImagesChange}
                            multiple={true}
                            existingFiles={existingImages.map(img => ({
                                id: img.id,
                                url: getImageUrl(img.image),
                                fileType: 'image'
                            }))}
                            onRemoveExisting={removeExistingImage}
                            fileType="image"
                        />
                    </CardContent>
                </Card>

                <div className="flex gap-4">
                    <Button type="submit" disabled={saving}>
                        {saving ? "Saving..." : "Save Changes"}
                    </Button>
                    <Button
                        type="button"
                        variant="outline"
                        onClick={() => router.push("/dashboard/events")}
                    >
                        Cancel
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default EditEventPage;
