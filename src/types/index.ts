// src/types/index.ts

// Interface representing a Journal Entry
export interface JournalEntry {
    id: string;
    date: string;
    content: string;
    mood: Mood;
}

// Enum for different moods
export enum Mood {
    Happy = 'happy',
    Sad = 'sad',
    Excited = 'excited',
    Anxious = 'anxious',
    Neutral = 'neutral',
}

// Interface representing the state of a Creature
export interface CreatureState {
    id: string;
    name: string;
    mood: Mood;
    health: number;
    energy: number;
}

// Interface for User Profile
export interface UserProfile {
    id: string;
    username: string;
    email: string;
    achievements: Achievement[];
}

// Interface for Achievements
export interface Achievement {
    id: string;
    title: string;
    description: string;
    dateAchieved: string;
}

// Interface for Focus Sessions
export interface FocusSession {
    id: string;
    date: string;
    duration: number; // in minutes
    notes: string;
}

// Interface for Environment Customization
export interface EnvironmentCustomization {
    id: string;
    background: string;
    music: string;
    settings: object; // Additional settings can vary
}