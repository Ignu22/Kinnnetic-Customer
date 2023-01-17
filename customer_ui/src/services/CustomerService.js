import axios from "axios";

const CUSTOMER_BASE_API_URL="http://localhost:8080/customer";

class CustomerService{

    getAllCustomer(){
        return axios.get(CUSTOMER_BASE_API_URL+"/getAll");
    }

    createCustomer(){
        return axios.post(CUSTOMER_BASE_API_URL+"/add");
    }
}

export default new CustomerService();