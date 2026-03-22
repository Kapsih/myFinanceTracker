import { CATEGORIES } from "./constants";

export const getId = () => {
    return `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
};

export const getDate = () => {
    return new Date().toISOString().split("T")[0];
}

export const getCategoryColor = (name) => {
    const category = CATEGORIES.find((category)=> category.name === name);
    return category ? category.color : "#808080" 
}