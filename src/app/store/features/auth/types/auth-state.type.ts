import { Teacher } from '@appApi';

export interface AuthState {
  isLoading: boolean;
  currentTeacher: Teacher | null;
  teacherList: Teacher[];
  isLoggedIn: boolean | null;
}
