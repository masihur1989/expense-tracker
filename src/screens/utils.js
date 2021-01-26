// screens helper functions
import { COLORS, icons } from '../../constants';

export function getIcon(category) {
    switch (category) {
        case "food":
            return icons.food;
        case "utility":
            return icons.utility;
        case "beauty":
            return icons.healthcare;
    }
}

export function getColor(category) {
    switch (category) {
        case "food":
            return COLORS.lightBlue;
        case "utility":
            return COLORS.blue;
        case "beauty":
            return COLORS.peach;
    }
}