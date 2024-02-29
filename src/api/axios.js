import axios from "axios";

const instanace = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "27c6900a77fe740077c6bbb1922ca043",
    language: "ko-KR",
  }
})

export default instanace;