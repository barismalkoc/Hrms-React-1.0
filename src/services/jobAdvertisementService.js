import axios from "axios";

export default class JobAdvertisementService {
  getAll() {
    return axios.get("http://localhost:8080/hrms/jobAdvertisement/getAll");
  }

  getAllSortedByDeadline() {
    return axios.get(
      "http://localhost:8080/hrms/jobAdvertisement/getAllSortedByDeadline"
    );
  }

  getAllActive() {
    return axios.get(
      "http://localhost:8080/hrms/jobAdvertisement/getAllActive"
    );
  }
}
