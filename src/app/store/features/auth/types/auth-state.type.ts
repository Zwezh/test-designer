import { Teacher } from '@appApi';

export interface AuthState {
  isLoading: boolean;
  currentTeacher: Teacher | null;
  teacherCollection: Teacher[];
  isLoggedIn: boolean | null;
}
