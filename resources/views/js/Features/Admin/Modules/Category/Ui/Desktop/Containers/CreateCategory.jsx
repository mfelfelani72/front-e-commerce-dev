import { useState } from "react";
import { useTranslation } from "react-i18next";

// Functions

import { createCategory } from "../../../Utils/Libs/categoryCRUD.js";

// Zustand

import useAppStore from "../../../../../../../Stores/AppStore.js";

const CategoriesList = () => {
    // hooks
    const { t } = useTranslation();

    const [formData, setFormData] = useState({
        name: "",
        slug: "",
        description: "",
        parent_id: "",
        featured_image: "",
        meta_title: "",
        meta_description: "",
        color: "#3b82f6",
        icon: "",
        order: 0,
        is_featured: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        createCategory(formData);
    };

    const generateSlug = (name) => {
        return name
            .toLowerCase()
            .replace(/[^a-z0-9 -]/g, "")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-")
            .trim();
    };

    const handleNameChange = (e) => {
        const name = e.target.value;
        setFormData((prev) => ({
            ...prev,
            name,
            slug: generateSlug(name),
        }));
    };

    // states
    const themeColor = useAppStore((state) => state.themeColor);

    return (
        <div className="bg-Background-light dark:bg-Background-dark p-4 rounded-2xl text-Text-light dark:text-Text-dark shadow-md">
            <div className="border-b border-b-Line-light dark:border-Line-dark pb-3">
                <h5 className="font-bold">{t("create_category")}</h5>
            </div>
            <div className="flex flex-col pt-2">
                <h2 className="text-2xl font-bold text-gonSubmitray-800 mb-6">
                    Create New Category
                </h2>

                <div className="space-y-6">
                    {/* Name and Slug */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Name *
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleNameChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Category name"
                                required
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="slug"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Slug *
                            </label>
                            <input
                                type="text"
                                id="slug"
                                name="slug"
                                value={formData.slug}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="category-slug"
                                required
                            />
                        </div>
                    </div>

                    {/* Description */}
                    <div>
                        <label
                            htmlFor="description"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            DescriptiononSubmit
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows={3}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Category description (optional)"
                        />
                    </div>

                    {/* Parent Category and Order */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label
                                htmlFor="parent_id"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Parent Category
                            </label>
                            <select
                                id="parent_id"
                                name="parent_id"
                                value={formData.parent_id}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option value="">None (Top Level)</option>
                            </select>
                        </div>

                        <div>
                            <label
                                htmlFor="order"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Order
                            </label>
                            <input
                                type="number"
                                id="order"
                                name="order"
                                value={formData.order}
                                onChange={handleChange}
                                min="0"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                    </div>

                    {/* Featured Image */}
                    <div>
                        <label
                            htmlFor="featured_image"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Featured Image URL
                        </label>
                        <input
                            type="url"
                            id="featured_image"
                            name="featured_image"
                            value={formData.featured_image}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="https://example.com/image.jpg"
                        />
                    </div>

                    {/* Meta Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label
                                htmlFor="meta_title"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Meta Title
                            </label>
                            <input
                                type="text"
                                id="meta_title"
                                name="meta_title"
                                value={formData.meta_title}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Meta title for SEO"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="meta_description"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Meta Description
                            </label>
                            <textarea
                                id="meta_description"
                                name="meta_description"
                                value={formData.meta_description}
                                onChange={handleChange}
                                rows={2}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Meta description for SEO"
                            />
                        </div>
                    </div>

                    {/* Color and Icon */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label
                                htmlFor="color"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Color
                            </label>
                            <div className="flex items-center">
                                <input
                                    type="color"
                                    id="color"
                                    name="color"
                                    value={formData.color}
                                    onChange={handleChange}
                                    className="w-10 h-10 border border-gray-300 rounded-md mr-2"
                                />
                                <input
                                    type="text"
                                    name="color"
                                    value={formData.color}
                                    onChange={handleChange}
                                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="#3b82f6"
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="icon"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Icon
                            </label>
                            <input
                                type="text"
                                id="icon"
                                name="icon"
                                value={formData.icon}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Icon class or name"
                            />
                        </div>
                    </div>

                    {/* Checkbox */}
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="is_featured"
                            name="is_featured"
                            checked={formData.is_featured}
                            onChange={handleChange}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label
                            htmlFor="is_featured"
                            className="ml-2 block text-sm text-gray-900"
                        >
                            Feature this category
                        </label>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                        <button
                            onClick={() => handleSubmit()}
                            className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Create Category
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoriesList;
