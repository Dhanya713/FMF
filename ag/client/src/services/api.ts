import { User, Career, Question, Roadmap, DashboardData, Interest, Recommendation } from '../types';

const API_BASE = 'https://fmf-587u.onrender.com/api';

function getToken(): string | null {
  return localStorage.getItem('findmyflow_token');
}

export function setToken(token: string) {
  localStorage.setItem('findmyflow_token', token);
}

export function removeToken() {
  localStorage.removeItem('findmyflow_token');
}

async function request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const token = getToken();
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string> || {})
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE}${endpoint}`, {
    ...options,
    headers
  });

  if (!response.ok) {
    let errorMsg = 'An error occurred';
    try {
      const errorData = await response.json();
      errorMsg = errorData.error || errorMsg;
    } catch {
      errorMsg = `Server error ${response.status}`;
    }
    throw new Error(errorMsg);
  }

  return response.json();
}

// Authentication
export async function signupApi(data: { name: string; email: string; password: string }) {
  const res = await request<{ message: string; user: User; token?: string; requiresVerification?: boolean; verificationToken?: string; verificationUrl?: string }>('/auth/signup', {
    method: 'POST',
    body: JSON.stringify(data)
  });
  if (res.token) {
    setToken(res.token);
  }
  return res;
}

export async function loginApi(data: { email: string; password: string }) {
  const res = await request<{ message: string; user: User; token: string }>('/auth/login', {
    method: 'POST',
    body: JSON.stringify(data)
  });
  setToken(res.token);
  return res;
}

export async function verifyEmailApi(token: string) {
  return request<{ message: string; user?: User }>(`/auth/verify-email?token=${encodeURIComponent(token)}`, {
    method: 'GET'
  });
}

export async function resendVerificationApi(email: string) {
  return request<{ message: string; verificationToken?: string; verificationUrl?: string }>('/auth/resend-verification', {
    method: 'POST',
    body: JSON.stringify({ email })
  });
}

export async function getCurrentUserApi() {
  return request<{ user: User }>('/auth/me');
}

export async function updateProfileApi(data: { name?: string; bio?: string; education?: string }) {
  return request<{ message: string; user: User }>('/auth/profile', {
    method: 'PUT',
    body: JSON.stringify(data)
  });
}

// Careers
export async function getCareersApi() {
  return request<{ careers: Career[] }>('/careers');
}

export async function getCareerByIdApi(id: string) {
  return request<{ career: Career }>(`/careers/${id}`);
}

export async function getRecommendationsApi() {
  return request<{ recommendations: Recommendation[]; isPreliminary?: boolean }>('/careers/recommendations');
}

// Assessment
export async function getQuestionsApi() {
  return request<{ questions: Question[] }>('/assessment/questions');
}

export async function submitAssessmentApi(answers: { questionId: number; optionIndex: number }[]) {
  return request<{ message: string; recommendations: Recommendation[]; topCareer: Recommendation }>(
    '/assessment/submit',
    {
      method: 'POST',
      body: JSON.stringify({ answers })
    }
  );
}

// Roadmap
export async function getRoadmapApi(careerId?: string) {
  const endpoint = careerId ? `/roadmap/${careerId}` : '/roadmap';
  return request<{ roadmap: Roadmap; career: Career }>(endpoint);
}

export async function toggleRoadmapItemApi(data: { careerId: string; itemId: string; completed: boolean }) {
  return request<{ message: string; roadmap: Roadmap; progressPercentage: number }>(
    '/roadmap/toggle-item',
    {
      method: 'POST',
      body: JSON.stringify(data)
    }
  );
}

export async function setActiveCareerApi(careerId: string) {
  return request<{ message: string; activeCareerId: string }>('/roadmap/set-active', {
    method: 'POST',
    body: JSON.stringify({ careerId })
  });
}

// User & Dashboard
export async function getInterestsApi() {
  return request<{ interests: Interest[] }>('/user/interests');
}

export async function updateUserInterestsApi(interests: string[]) {
  return request<{ message: string; user: User }>('/user/interests', {
    method: 'POST',
    body: JSON.stringify({ interests })
  });
}

export async function getDashboardApi() {
  return request<DashboardData>('/user/dashboard');
}
