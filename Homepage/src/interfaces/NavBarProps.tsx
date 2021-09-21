import { IUser } from './User';
export interface INavBarProps {
    user: IUser,
    openSignInModal: () => void
} 