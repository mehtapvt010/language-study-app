# Feature: Dashboard
- fetching and displaying recent exercises (3 pts)
- fetching stored progress generating progress bar (3 pts)
- continuing an exercise from stored state (2 pts)
- restarting an exercise from the beginning(2 pts)

## Feature Descriptions

### Fetching and displaying recent exercises
Once a user logs in, it will display a few recent exercises that the user worked on the previous times that they visited the application. 

### Fetching and generating progress bar
Under the name of each exercise, there will be a progress bar, colored in to visualize how much of the exercise the user has completed. 

### Continuing an exercise from stored state
The user can choose to continue an exercise directly from the dashboard. This takes them to the lesson and allows them to complete the exercise from where they left off. 

### Restarting an exercise from the beginning
If a user is not confident with recent material and wants to restart an exercise, they are also able to do that directly from the dashboard. This takes them to the exercise, restarts it, and updates the progress to 0%.

## Mermaid Diagram for Recent Exercises 

```mermaid
sequenceDiagram
actor user
participant application
participant server
    alt displaying recent exercises
        user ->> application: open dashboard
        application ->> server: fetch recent exercises and progress data
        server ->> application: return exercises data with progress
        application ->> user: display recent exercises with progress bars
    else resuming an exercise
        user ->> application: click to resume "Exercise 1: Greetings in Spanish"
        application ->> server: fetch progress for "Exercise 1"
        server ->> application: return progress data (e.g., 30%)
        application ->> user: resume "Exercise 1" from 30% progress
    else restarting an exercise
        user ->> application: click to restart "Exercise 2: Spanish Fruits"
        application ->> server: reset progress for "Exercise 2"
        server ->> application: success (reset progress to 0%)
        application ->> user: display "Exercise 2" from the beginning
        user ->> application: start the lesson from the beginning
        application ->> user: display lesson content (starting from 0%)
    end
```