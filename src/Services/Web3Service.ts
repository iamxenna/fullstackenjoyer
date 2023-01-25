import Web3 from "web3";
import ABI from './ABI.json';

class Web3Service{

    web3 = new Web3('http://localhost:8545');
    contract = new this.web3.eth.Contract(ABI as any, '0x505d59ffFd312983Cc0eD114d7F117B91520d742');

    async registerUser(address: string, login: string, password: string, age: number) {
        try {
            return await this.contract.methods.registration(login, password, age).send({from: address});
        } catch (e) {
            console.log(e);
        }
    }

    async loginUser(address: string, login: string, password: string) {
        try {
            return await this.contract.methods.auth(login, password).call({from: address});
        } catch (e) {
            console.log(e);
        }
    }

    async addAdmin(userAddress: string, address: string) {
        try {
            return await this.contract.methods.addAdmin(userAddress).send({from: address});
        } catch (e) {
            console.log(e);
        }
    }

    async addComment(id: number, review: string, mark: number, address: string) {
        try {
            return await this.contract.methods.addComment(id, review, mark).send({from: address});
        } catch (e) {
            console.log(e);
        }
    }

    async getComments(id: number, address: string) {
        try {
            return await this.contract.methods.getComments(id).call({from: address});
        } catch (e) {
            console.log(e);
        }
    }
}
export default new Web3Service();