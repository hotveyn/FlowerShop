import {defineStore} from 'pinia';
import {IUser} from '@/interfaces/IUser';

interface State {
    users: IUser[];
    authorizedUser?: IUser,

}


export const useUsersStore = defineStore('users', {
    state: (): State => ({
        users: [
            {
                id: 1,
                username: 'admin',
                email: 'admin@gmail.com',
                phone: 88005553535,
                password: 'admin',
                aboutMe: 'I am a God. How can you kill a God?',
            },
        ],
        authorizedUser: undefined,
    }),
    actions: {
        login(loginName: string, loginPassword: string): string | void {
            const loginUser: IUser[] = this.users.filter((someUser) => {
                if (someUser.username == loginName) {
                    return true;
                }
            });
            if (loginUser.length) {
                if (loginUser[0].password === loginPassword) {
                    this.authorizedUser = loginUser[0];
                }
            } else {
                return 'Ошибка';
            }
        },
        exit(): void {
            this.authorizedUser = undefined;
        },
        regUser(regUserName: string, regEmail: string, regPassword: string): void {
            const newUser: IUser = {
                id: this.users.length + 1,
                username: regUserName,
                email: regEmail,
                password: regPassword,
            };
            this.authorizedUser = newUser;
            this.users.push(newUser);
        },
        // Fix: возможно стоит сделать одним методом
        setAuthorizedUserName(newUserName: string): void {
            if (this.authorizedUser) {
                this.authorizedUser.username = newUserName;
            }
        },
        setAuthorizedUserPassword(newPassword: string): void {
            if (this.authorizedUser) {
                this.authorizedUser.password = newPassword;
            }
        },
        setAuthorizedUserPhone(newPhone: number): void {
            if (this.authorizedUser && newPhone) {
                this.authorizedUser.phone = newPhone;
            }
        },
        setAuthorizedUserEmail(newEmail: string): void {
            if (this.authorizedUser) {
                this.authorizedUser.email = newEmail;
            }
        },
        setAuthorizedUserAboutMe(newAboutMe: string): void {
            if (this.authorizedUser && newAboutMe) {
                this.authorizedUser.aboutMe = newAboutMe;
            }
        },
    },
    getters: {

        containUser: (state) => {
            return (userEmail: string): boolean => {
                const userByEmail = state.users.find((user) => user.email === userEmail);
                return !!userByEmail;
            };
        },
    },
});
