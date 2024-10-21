# Language Learning Web App - Data Schema

## 1. User Profile
- **Description**: Stores the personal information of users and their language learning progress.
- **Attributes**:
  - `user_id` (string): A unique identifier for each user.
  - `username` (string): The chosen username of the user.
  - `email` (string): The email address associated with the account.
  - `password_hash` (string): A hashed version of the user's password for security.
  - `languages_learned` (array of strings): A list of languages the user is learning.
  - `current_level` (integer): The user's current level in the selected language.
  - `created_at` (timestamp): The date and time the account was created.
  - `last_login` (timestamp): The date and time of the user's last login.
- **Data Source**: User-input during account creation and updates via the profile settings.

## 2. Language Progress
- **Description**: Tracks the progress of users in each language they are learning.
- **Attributes**:
  - `progress_id` (string): A unique identifier for each language progress entry.
  - `user_id` (string): The unique identifier of the user.
  - `language` (string): The language being learned (e.g., "Spanish", "French").
  - `lessons_completed` (integer): The number of lessons completed in the language.
  - `flashcards_mastered` (integer): The number of flashcards the user has mastered.
  - `streak_days` (integer): The number of consecutive days the user has practiced the language.
- **Data Source**: User interactions and progress through lessons and activities.

## 3. Flashcards
- **Description**: Stores the flashcards for vocabulary learning, which users can review and practice.
- **Attributes**:
  - `flashcard_id` (string): A unique identifier for each flashcard.
  - `user_id` (string): The unique identifier of the user.
  - `language` (string): The language associated with the flashcard.
  - `word` (string): The word or phrase in the foreign language.
  - `translation` (string): The translation of the word or phrase in the user's native language.
  - `date_added` (date): The date the flashcard was created.
  - `times_reviewed` (integer): The number of times the flashcard has been reviewed.
  - `mastery_level` (integer): The user's mastery level of the flashcard.
- **Data Source**: User-created flashcards and translations.

## 4. Lesson Content
- **Description**: Contains the structured lessons for each language, covering vocabulary, grammar, and exercises.
- **Attributes**:
  - `lesson_id` (string): A unique identifier for each lesson.
  - `language` (string): The language being taught in the lesson.
  - `lesson_title` (string): The title of the lesson (e.g., "Introduction to Verbs").
  - `content` (text): The instructional content and exercises for the lesson.
  - `created_at` (timestamp): The date and time the lesson was created.
- **Data Source**: Predefined lessons created by the app's administrators.

## 5. Translation History
- **Description**: Stores the history of words and phrases users have translated and saved for future reference.
- **Attributes**:
  - `translation_id` (string): A unique identifier for each translation entry.
  - `user_id` (string): The unique identifier of the user.
  - `phrase` (string): The word or phrase translated by the user.
  - `translation` (string): The user's saved translation.
  - `date_translated` (date): The date the translation was made.
- **Data Source**: User input via the translation feature.

## Data Relationships
- **User to Language Progress**: One-to-many relationship (a user can have progress data for multiple languages).
- **User to Flashcards**: One-to-many relationship (a user can create many flashcards for different languages).
- **User to Translation History**: One-to-many relationship (a user can have many saved translations).
- **Lesson to Flashcards**: One-to-many relationship (a lesson may have associated flashcards for vocabulary practice).

## Data Sources
- **User-Input Data**: User profile details, flashcard creation, lesson progression, and translation history will come from direct user input.
- **System-Generated Data**: Progress tracking (e.g., streak days, lessons completed, mastery level) will be automatically updated as users engage with lessons and flashcards.
"""
