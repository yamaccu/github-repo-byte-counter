import axios from "axios";

export default async (req, res) => {

    const ret = axios({
        url: "https://api.github.com/graphql",
        method: "post",
        data: {
            query: `
                query{
                    user(login:"yamaccu") {
                    repositories(first:100 ,isFork:false){
                        nodes{
                        name
                        languages(first:10) {
                            edges {
                            size
                            node {
                                name
                            }
                            }
                        }
                        }
                    }
                    }
                }
                }
                `,
        }
    });

    ret.then((r) => {console.log(r.data)})

    return res.send(r.data);
};