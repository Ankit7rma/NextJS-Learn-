"use client";
export default function Error() {
  //as props { error }
  return (
    <main className="error">
      <h1>An error occured </h1>
      {/* <p>{error.message}</p> */}
      <p>Failed to create meal.</p>
    </main>
  );
}
