import Web3 from "web3";
import ABI from './ABI.json';

class Web3Service{

    web3 = new Web3('http://localhost:8545');
    contract = new this.web3.eth.Contract(ABI as any, '0x02AA3Ae6708682617845A48ea54BFB10B5cc5493');

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

    async tokenPrice(address: string) {
        try {
            return await this.contract.methods.tokenPrice().send({from: address});
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

    async createRequest(amount: number, address: string) {
        try {
            return await this.contract.methods.requestToSell(amount, address).send({from: address});
        } catch (e) {
            console.log(e);
        }
    }

    async getRequests(userAddress: string, address: string) {
        try {
            return await this.contract.methods.getRequests(userAddress).call({from: address});
        } catch (e) {
            console.log(e);
        }
    }

    async getTime(address: string) {
        try {
            return await this.contract.methods.getTime().send({from: address});
        } catch (e) {
            console.log(e);
        }
    }

    async setTime() {
        try {
            return await this.contract.methods.show().call();
        } catch (e) {
            console.log(e);
        }
    }

    async approveRequest(amount: number, userAddress: string, tokenPrice: number, adminAddress: string, id: number) {
        try {
            const bigNumber = BigInt(amount * tokenPrice).toString();
            return await this.contract.methods.approveRequest(userAddress, id).send({from: adminAddress, value: bigNumber});
        } catch (e) {
            console.log(e);
        }
    }

    async cancelRequest(userAddress: string, id: number, address: string) {
        try {
            return await this.contract.methods.cancelRequest(userAddress, id).send({from: address});
        } catch (e) {
            console.log(e);
        }
    }

    async getAllowance(userAddress: string, userRole: string) {
        try {
            if (userRole === "2"){
                return await this.contract.methods.allowance(userAddress, "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC")
                    .call({from: "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC"});
            }
            return await this.contract.methods.allowance("0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC", userAddress)
                .call({from: "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC"});
        } catch (e) {
            console.log(e);
        }
    }

    async approveUser(userAddress: string, userRole: string) {
        try {
            if (userRole === "2"){
                return await this.contract.methods.approve("0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC", userAddress)
                    .send({from: userAddress});
            }
            return await this.contract.methods.approve(userAddress, "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC")
                .send({from: "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC"});
        } catch (e) {
            console.log(e);
        }
    }

    async contractTime() {
        try {
            return await this.contract.methods.contractTime().send({from: "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC"});
        } catch (e) {
            console.log(e);
        }
    }

    async getContractTime() {
        try {
            return await this.contract.methods.getContractTime().call({from: "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC"});
        } catch (e) {
            console.log(e);
        }
    }

    async setPhase(phase: number) {
        try {
            return await this.contract.methods.setPhase(phase).send({from: "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC"});
        } catch (e) {
            console.log(e);
        }
    }
}
export default new Web3Service();