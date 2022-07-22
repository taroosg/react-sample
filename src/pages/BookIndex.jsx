import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from '../firebase';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';

export const BookIndex = () => {

  const [loading, setLoading] = useState(true)
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "books"), orderBy("timestamp", "desc"));
    const unsub = onSnapshot(q, (documentSnapshot) => {
      console.log(documentSnapshot.docs.map((x) => ({ ...x.data(), id: x.id })));
      setBooks(documentSnapshot.docs.map((x) => ({ ...x.data(), id: x.id })));
      setLoading(false);
    });
    return unsub;
  }, []);

  if (loading) { return <p>loading now...</p> }

  return (
    <>
      <p>本一覧の画面</p>
      <table>
        <thead><tr><th>タイトル</th><th>場所</th><th>天気</th></tr></thead>
        <tbody>
          {books.map((x, i) => <tr key={i}><td><Link to={`/book-show/${x.id}`}>{x.book}</Link></td><td>{x.place}</td><td>{x.weather}</td></tr>)}
        </tbody>
      </table>
    </>
  )
}