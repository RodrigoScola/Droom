import { query, addDoc, collection, doc, getDoc, getDocs, getFirestore, updateDoc, where } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";

import app from "../components/firebase";
export const useFireship = () => {
	const [db, setDb] = useState(getFirestore(app));
	const createPost = async (data, collectionName = "music") => {
		const docRef = await addDoc(collection(db, collectionName), data);
		console.log(docRef);
	};
	const updatePost = async (data, collectionName, key) => {
		const currDoc = await getById(collectionName, key);
		const ref = await updateDoc(currDoc, data);
		return ref;
	};
	const getById = async (collectionName, id) => {
		const d = await getDoc(doc(db, collectionName, id));
		return d.data();
	};
	const getPosts = async () => {
		const ref = await getDocs(collection(db, "music"));
		const res = [];

		ref.forEach((item, index) => {
			res.push({ id: index, ...item.data() });
		});
		return res;
	};

	const getPostsByUser = async (userId) => {
		const ref = collection(db, "music");
		const q = query(ref, where("userId", "==", userId));

		const refs = await getDocs(q);

		const res = [];

		refs.forEach((item) => {
			res.push(item.data());
		});
		return res;
	};

	return {
		createPost,
		getPosts,
		updatePost,
		getPostsByUser,
	};
};
