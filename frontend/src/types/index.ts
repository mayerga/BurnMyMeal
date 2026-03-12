export interface MealAnalysis {
    food_items: string[];
    total_calories: number;
    confidence_score: number;
}

export interface RouteOptions {
    type: 'linear' | 'round-trip' | 'circular';
    activity: 'walking' | 'running' | 'cycling';
    weight: number;
}