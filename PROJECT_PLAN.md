# Master Project Plan: Thikana

**Version:** 1.0  
**Project:** Thikana - Guardians of your real estate legacy.

*This is the central planning document for the Thikana project. Each major section is collapsible for easier navigation.*

---

<details>
  <summary><h2>1. Brand Identity Specification</h2></summary>
  
  *   **Brand Name:** Thikana
  *   **Tagline:** Guardians of your real estate legacy.
  *   **Brand Story:** Thikana (ঠিকানা) means "address" or "home." In a world where property management is fragmented, Thikana stands as a central, trusted place—a guardian of assets, records, and relationships. It is more than a management tool; it is a promise of protection, designed to safeguard the homes, investments, and trust that owners place in it.
  *   **Brand Pillars:**
      *   **Trust:** The system is secure, reliable, and transparent.
      *   **Continuity:** Features support long-term use and legacy planning.
      *   **Responsibility:** The tool empowers users with control and care.
      *   **Clarity:** The interface is intuitive and unambiguous.
  *   **Brand Personality:** A calm, competent, and quietly authoritative trusted advisor. The voice is grounded, respectful, and clear, avoiding corporate buzzwords.
  *   **Color Palette ("Slate & Sandstone"):**
      *   **Background:** Off-White (`#F8F9FA`)
      *   **Foreground (Text):** Charcoal Slate (`#212936`)
      *   **Primary Accent (Buttons):** Trustworthy Blue (`#2E64A1`)
      *   **Destructive Accent (Warnings):** Brick Red (`#B91C1C`)
      *   **Highlight Accent (Focus states):** Sandstone (`#DDBEA9`)

</details>

---

<details>
  <summary><h2>2. Software Requirements Specification (SRS)</h2></summary>

  #### **2.1. Vision**
  To provide a secure, clear, and reliable system of record for individual property owners and small portfolio managers, empowering them to safeguard their real estate legacy.

  #### **2.2. User Roles**
  For the MVP, a single role is defined: `PROPERTY_OWNER`.

  #### **2.3. Core Feature Modules (MVP)**
  1.  **Authentication & Security:** Secure account creation, login (email/password, Google/Facebook), and MFA.
  2.  **Dashboard:** A high-level overview of the portfolio and critical upcoming events.
  3.  **Property Hub:** CRUD (Create, Read, Update, Delete) operations for properties.
  4.  **Document Vault:** Secure document upload and categorization per property.
  5.  **Financial Ledger:** Logging and summarizing income/expenses per property.
  6.  **Maintenance Log:** Creating and tracking maintenance requests and history.
  7.  **Tenant Management:** Managing tenant information and lease details per property.

  #### **2.4. User Stories**
  *   **Authentication:** Users can sign up, log in securely (with email or social providers), and enable MFA.
  *   **Properties:** Owners can add, view, edit, and manage the details of their properties.
  *   **Documents:** Owners can upload and categorize critical documents like deeds and insurance policies for each property.
  *   **Finances:** Owners can log income/expenses and view financial summaries for their properties.
  *   **Maintenance:** Owners can track maintenance requests from report to resolution, building a complete history.
  *   **Tenants:** Owners can manage tenant and lease information, associating them with specific properties.

</details>

---

<details>
  <summary><h2>3. Technical Architecture & Stack</h2></summary>

  This project consists of two separate, decoupled repositories: one for the frontend and one for the backend. This allows for independent development, deployment, and scaling.

  *   **Frontend Repository (`thikana-frontend`):** Next.js, TypeScript, Tailwind CSS, Shadcn/UI, Framer Motion.
  *   **Backend Repository (`thikana-backend`):** NestJS, TypeScript, Passport.js (for authentication), Swagger/OpenAPI (for documentation).
  *   **Database:** **PostgreSQL via Supabase.**
      *   **Reasoning:** Supabase offers a generous free tier (no CC required), a robust PostgreSQL database perfect for relational data, and useful built-in features like Auth and Storage.
  *   **Deployment:**
      *   **Frontend (Next.js):** Vercel.
      *   **Backend (NestJS):** Render.
      *   **Reasoning:** Both Vercel and Render offer excellent free tiers, no credit card required, and have first-class support for our chosen technologies.
  
  ***Note:** This stack represents the current plan. As a hobby project, specific technologies may be adapted during development to best suit the project's needs.*

</details>

---

<details>
  <summary><h2>4. Cost Analysis & Service Selection</h2></summary>
  
| Service | Purpose | Free Tier Limits (Key Metrics) | Scaling Costs (High-Level) | CC Required? |
| :--- | :--- | :--- | :--- | :--- |
| **Vercel** | Frontend Hosting | 100 GB Bandwidth/mo, Fair Use Functions | Pro Plan at $20/user/mo | **No** |
| **Render** | Backend Hosting | 750 free instance hours/mo, 512MB RAM | Starter plans from $7/mo | **No** |
| **Supabase** | Database (PostgreSQL) | 2 Free Projects, 500MB DB Space, 1GB Storage | Pro Plan at $25/mo | **No** |

**Conclusion:** The entire MVP can be built, deployed, and run for **$0** using the selected services.

</details>

---

<details>
  <summary><h2>5. Risk Assessment</h2></summary>

| Risk Category | Description | Mitigation Strategy |
| :--- | :--- | :--- |
| **Scope Creep** | Adding features beyond the defined MVP can delay the project indefinitely. | Adhere strictly to the SRS. Log all new feature ideas in a "V2 Backlog". |
| **Time Commitment**| As a hobby project, finding consistent time can be challenging. | Set realistic, small, and achievable weekly goals. Focus on one module at a time. |
| **Data Security** | A security breach would destroy the brand's core pillar of **Trust**. | Follow security best practices rigorously (hashing, salting, secure cookies, MFA). Rely on established libraries like Passport.js. |
| **Brand Conflict**| The name "Thikana" is a common word, which could cause confusion. | Focus on building a strong, unique visual identity. Secure unique social media handles (e.g., `thikanaapp`). |

</details>

---

<details>
  <summary><h2>6. Step-by-Step Development Plan</h2></summary>
  
  #### **Phase 0: Foundation (Complete)**
  1.  Finalize brand name and identity.
  2.  Create separate public GitHub repositories for `thikana-frontend` and `thikana-backend`.
  3.  Set up the Next.js project in `thikana-frontend` with `shadcn/ui`.
  4.  Finalize and commit the `README.md` and this `PROJECT_PLAN.md`.

  #### **Phase 1: Backend Setup & Authentication**
  1.  In the `thikana-backend` repository, create a new NestJS project.
  2.  Set up a new project on Supabase to get database credentials.
  3.  Connect the NestJS app to the Supabase database (e.g., using Prisma).
  4.  Implement user registration and login endpoints (`/auth/signup`, `/auth/login`).
  5.  Implement JWT generation and secure cookie handling.

  #### **Phase 2: Backend API (MVP)**
  1.  Create NestJS modules for `Properties`, `Tenants`, `Documents`, `Finances`, `Maintenance`.
  2.  Define data models/schemas for each feature.
  3.  Implement the core CRUD API endpoints for each module.
  4.  Implement route guards to protect endpoints, ensuring data ownership.
  5.  Set up Swagger for automatic API documentation.

  #### **Phase 3: Frontend Development**
  1.  In the `thikana-frontend` repository, build the main application layout (sidebar, header).
  2.  Implement the login and registration pages.
  3.  Create a data fetching service/hook to communicate with the backend API.
  4.  Build out the UI for each feature using `shadcn/ui` components, following the user stories.

  #### **Phase 4: Integration & Deployment**
  1.  Connect the frontend UI to the live backend API endpoints.
  2.  Thoroughly test the end-to-end user flows.
  3.  Deploy the NestJS backend to Render.
  4.  Deploy the Next.js frontend to Vercel.
  5.  Configure environment variables in both Vercel and Render for production.

</details>

---

<details>
  <summary><h2>7. Preliminary API Documentation</h2></summary>
  
  *A full OpenAPI/Swagger specification will be generated by NestJS.*

  *   **Authentication**
      *   `POST /auth/signup` - Register a new user.
      *   `POST /auth/login` - Log in a user and return a JWT.
      *   `POST /auth/logout` - Clear the session cookie.
      *   `GET /auth/me` - Get the current authenticated user's profile.
  *   **Properties**
      *   `POST /properties` - Create a new property.
      *   `GET /properties` - Get all properties for the authenticated user.
      *   `GET /properties/:id` - Get a single property by its ID.
      *   `PATCH /properties/:id` - Update a property.
      *   `DELETE /properties/:id` - Delete a property.
  *   **Documents**
      *   `POST /properties/:id/documents` - Upload a document for a property.
      *   `GET /properties/:id/documents` - List all documents for a property.
  
  *(Similar CRUD endpoints will be created for Tenants, Finances, and Maintenance.)*

</details>