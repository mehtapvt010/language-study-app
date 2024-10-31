### Feature: Landing Page → Dashboard

- Small feature(2 points): Language Switch Option
- Medium Feature(3 points): Nav-bar/multi ui Header and footer
- Large Feature(5 points): Landing Page → Dashboard

### Feature Descriptions

1. **Language Switch Option (Small Feature, 2 Points)**:
   - **Description**: This feature allows users to easily switch between different languages on the landing page and throughout the application.

2. **Nav-bar/Multi-UI Header and Footer (Medium Feature, 3 Points)**:
   - **Description**: The navigation bar, header, and footer are designed to provide a cohesive UI. The navigation bar allows users to access different sections of the application ,the header provides branding. The footer contains links to important resources, such as privacy policies and terms of service. This multi-UI component ensures that users can navigate the application.

3. **Landing Page to Dashboard Navigation (Large Feature, 5 Points)**:
   - **Description**: The landing page serves as the entry point for users. Once users successfully authenticate, they are directed to the dashboard, which serves as the central hub for accessing key features such as flashcards and exercises. This feature helps in transitioning between different application states. The layout is designed to be user-friendly, with clear calls to action that encourage engagement.

### Mermaind Syntax Flow:
```
flowchart TD
    A[Open Application] --> B[Display Landing Page]
    
    B --> C[Show Sign Up Button]
    B --> D[Show Log In Button]
    B --> E[Show Language Switch Button]

    C --> F[Click Sign Up Button]
    F --> G[Show Sign Up Form]
    G --> H[Click Submit Button]
    H --> I[Display Confirmation Message]
    I --> J[Navigate to Dashboard]

    D --> K[Click Log In Button]
    K --> L[Show Login Form]
    L --> M[Click Submit Button]
    M --> N[Display Dashboard with Key Features]

    E --> O[Click Language Switch Button]
    O --> P[Show Available Languages]
    P --> Q[Click Desired Language Button]
    Q --> R[Update to Selected Language]
```

**Image view:** ![mermaid-flow (1)](https://github.com/user-attachments/assets/264632b1-0353-49e1-9acc-549de26f6d60)

