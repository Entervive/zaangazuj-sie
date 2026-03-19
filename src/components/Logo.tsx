export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`font-extrabold tracking-tight ${className}`}>
      Zaan<span className="text-[#fece30]">g</span>ażuj się!
    </div>
  );
}
