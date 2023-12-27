export default function ButtonPrimary({ text }: { text: string }) {
  return (
    <button className="bg-brand-300 h-12 rounded-full px-4 text-white flex justify-center items-center gap-2">
      {text}
      <img className="w-6" src="./arrow-right.svg" />
    </button>
  );
}
