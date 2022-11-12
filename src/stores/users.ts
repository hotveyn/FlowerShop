import {defineStore} from "pinia";
import {IUser} from "@/interfaces/IUser";

interface State {
    users: IUser[];
    authorizedUser?: IUser,

}


export const useUsersStore = defineStore("users", {
    state: (): State => ({
        users: [
            {
                username: "Hotvein",
                email: "hotveyn@gmail.com",
                phone: 88005553535,
                password: "admin",
                aboutMe: "I am a God. How can you kill a God?",
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
                return "Ошибка";
            }
        },
        exit(): void {
            this.authorizedUser = undefined;
        },
        regUser(regUserName: string, regEmail: string, regPassword: string): void {
            const newUser: IUser = {
                username: regUserName,
                email: regEmail,
                password: regPassword,
            };
            this.authorizedUser = newUser;
            this.users.push(newUser);
        },
    },
    getters: {
        getAuthorizedUser(): IUser | undefined {
            if (this.authorizedUser) {
                return this.authorizedUser;
            }
            return undefined;
        },
    },
});