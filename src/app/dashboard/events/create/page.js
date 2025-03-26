"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ReactQuillEditor } from "@/components/ReactQuillEditor";
import { FileUploader } from "@/components/FileUploader";
import { useToast } from "@/components/ui/use-toast";
import slugify from "slugify";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CreateEventPage = () => {
    const router = useRouter();
    const { toast } = useToast();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        slug: "",
        shortDescription: "",
        description: "",
        location: "",
        startDate: "",
        endDate: "",
        timing: "", // This will now store time in HH:MM format
        videoUrl: "",
    });
    const [thumbnail, setThumbnail] = useState(null);
    const [images, setImages] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        if (name === "title") {
            setFormData((prev) => ({
                ...prev,
                slug: slugify(value, { lower: true, strict: true }),
            }));
        }
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
        setImages(files);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const formDataToSend = new FormData();

            // Add text fields
            Object.keys(formData).forEach((key) => {
                formDataToSend.append(key, formData[key]);
            });

            // Add thumbnail
            if (thumbnail) {
                formDataToSend.append("thumbnail", thumbnail);
            }

            // Add images
            images.forEach((image) => {
                formDataToSend.append("images", image);
            });

            const response = await fetch("/api/events/create", {
                method: "POST",
                body: formDataToSend,
            });

            const data = await response.json();
            console.log(data)
            if (response.ok) {
                toast({
                    title: "Event created",
                    description: "Your event has been created successfully",
                });
                router.push("/dashboard/events");
            } else {
                throw new Error(data.error || "Failed to create event");
            }
        } catch (error) {
            console.error("Error creating event:", error);
            toast({
                title: "Error",
                description: error.message || "Failed to create event",
                variant: "destructive",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-8">Create New Event</h1>

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
                            placeholder="HH:MM"
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
                            height: 250,

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
                        fileType="image"
                    />
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Images</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2">
                            <FileUploader
                                accept="image/*"
                                onFileChange={handleImagesChange}
                                multiple={true}
                                fileType="image"
                            />
                        </div>
                    </CardContent>
                </Card>

                <div className="flex gap-4">
                    <Button type="submit" disabled={loading}>
                        {loading ? "Creating..." : "Create Event"}
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

export default CreateEventPage;
