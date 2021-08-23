import axios from "axios";

const loadPostApi = async () => {
	
	await axios.get(
		"https://newsapi.org/v2/everything?domains=wsj.com&apiKey=5728b06b5eab427983f198c7320ec810"
	).then(res=>{
		return res.data
	})
};

export default loadPostApi