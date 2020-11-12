import { Teacher } from '@appApi';

export interface AuthState {
  isLoading: boolean;
  currentTeacher: Teacher | null;
  teacherCollection: Array<Teacher>;
  isLoggedIn: boolean | null;
}
