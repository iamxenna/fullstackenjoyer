import Web3 from "web3";
import ABI from './ABI.json';

class Web3Service{

    web3 = new Web3('http://localhost:8545');
    contract = new this.web3.eth.Contract(ABI as any, '0xe4EB561155AFCe723bB1fF8606Fbfe9b28d5d38D');

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

    async balanceOf(address: string) {
        try {
            return await this.contract.methods.balanceOf(address).call({from: address});
        } catch (e) {
            console.log(e);
        }
    }

    async getUserBalance(address: string) {
        try {
            return await this.contract.methods.getBalance().call({from: address});
        } catch (e) {
            console.log(e);
        }
    }

    async getTokenPrice() {
        try {
            return await this.contract.methods.getTokenPrice().call();
        } catch (e) {
            console.log(e);
        }
    }

    async purchaseTokens(amount: number, address: string, tokenPrice: number) {
        try {
            return await this.contract.methods.buyToken(amount).send({from: address, value: tokenPrice * amount});
        } catch (e) {
            console.log(e);
        }
    }
}
export default new Web3Service();