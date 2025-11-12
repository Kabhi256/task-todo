# Todo Application

A full-stack todo application with a Django REST API backend and Next.js frontend. Manage your tasks efficiently with a modern, responsive interface.

## Features

- ✅ Create, read, update, and delete todos
- 🏷️ Organize tasks by status (Pending, In Progress, Completed, Cancelled)
- 👤 User authentication and task ownership
- 📱 Responsive design using Tailwind CSS
- 🎨 Modern UI components with Radix UI

## Tech Stack

### Backend
- **Framework**: Django 5.2.8
- **API**: Django REST Framework 3.16.1
- **Database**: SQLite
- **Language**: Python 3.x
- **CORS**: django-cors-headers

### Frontend
- **Framework**: Next.js 16.0.1
- **Language**: TypeScript 5
- **UI Library**: Radix UI
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **HTTP Client**: Axios

## Create/Update todo data structure
```
{
  "task_name": "Buy groceries",
  "description": "Milk, eggs, bread",
  "status": "Pending"
}```

## Response
```{
  "success": true,
  "todo": {
    "id": 1,
    "task_name": "Buy groceries",
    "description": "Milk, eggs, bread",
    "status": "Pending",
    "created_at": "2025-11-12T10:30:00Z",
    "created_by": "user@example.com"
  }
}```
