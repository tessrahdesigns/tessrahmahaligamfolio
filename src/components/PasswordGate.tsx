import { useState } from "react";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface PasswordGateProps {
  storageKey: string;
  children: React.ReactNode;
}

const CORRECT_PASSWORD = "accessgranted";

const PasswordGate = ({ storageKey, children }: PasswordGateProps) => {
  const [unlocked, setUnlocked] = useState(() => localStorage.getItem(storageKey) === "true");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  if (unlocked) return <>{children}</>;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      localStorage.setItem(storageKey, "true");
      setUnlocked(true);
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-5 w-full max-w-xs"
      >
        <Lock size={32} className="text-muted-foreground" />
        <h2 className="font-serif text-xl text-foreground">This project is protected</h2>
        <p className="text-sm text-muted-foreground text-center">Enter the password to view this case study.</p>
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => { setPassword(e.target.value); setError(false); }}
          className={error ? "border-destructive" : ""}
          autoFocus
        />
        {error && <p className="text-xs text-destructive -mt-3">Incorrect password. Try again.</p>}
        <Button type="submit" className="w-full">Unlock</Button>
      </motion.form>
    </div>
  );
};

export default PasswordGate;
