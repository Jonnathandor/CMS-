export interface ILoginModalProps {
    openSignIn: boolean
    signIn: (e: React.MouseEvent<HTMLElement>, isOpen: boolean, email: string, password: string) => void
    closeModal: (isOpen: boolean) => void
}  