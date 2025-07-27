# Angular Quiz App

A simple Angular app that fetches users from the Reqres API and displays them in a paginated list with detail views.

---

## ✅ Features

- Paginated list of users (6 per page)
- Clickable user cards (with avatar, name, ID)
- User detail page with full information
- Instant search by user ID
- "User Not Found" fallback handling
- Caching to avoid repeated API calls
- Global loading bar for all HTTP requests
- Responsive and styled with Angular Material

---

## 🔐 API Key

This app uses [https://reqres.in](https://reqres.in) which now requires an API key.

### How to get one:
1. Go to [https://reqres.in/signup](https://reqres.in/signup)
2. Register to get a **free API key** (e.g. `reqres-free-v1`)

### How to use:
Open `src/app/services/user.service.ts`  
Replace the key here:

```ts
private readonly API_KEY = 'reqres-free-v1'; 
```

This will be used in all requests as:

```ts
headers: {
  'x-api-key': this.API_KEY
}
```

---

## 🚀 How to Run the App

1. Clone the repo or download the ZIP:
   ```bash
   git clone https://github.com/your-username/angular-quiz.git
   cd angular-quiz
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   ng serve
   ```

4. Open in your browser:
   ```
   http://localhost:4200/
   ```

---


