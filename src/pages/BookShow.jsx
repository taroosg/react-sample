import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

export const BookShow = () => {

  const [loading, setLoading] = useState(true)
  const [book, setBook] = useState(null);

  const { id } = useParams();
  console.log(id)

  useEffect(() => {
    const docRef = doc(db, "books", id);
    getDoc(docRef).then((documentSnapshot) => {
      console.log({ ...documentSnapshot.data(), id: documentSnapshot.id });
      setBook({ ...documentSnapshot.data(), id: documentSnapshot.id });
      setLoading(false);
    });
  }, [])

  if (loading) { return <p>loading now...</p> }

  return (
    <>
      <p>本詳細の画面</p>
      <table>
        <tbody>
          <tr><td>場所</td><td>{book.place}</td></tr>
          <tr><td>天気</td><td>{book.weather}</td></tr>
          <tr><td>読んだ本</td><td>{book.book}</td></tr>
          <tr><td>感想</td><td>{book.text}</td></tr>
        </tbody>
      </table>
    </>
  );
};