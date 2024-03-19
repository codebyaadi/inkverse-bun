import { ChangeEvent, FormEvent, useState } from "react";
import axios, { isAxiosError } from "axios";
import { toast } from "sonner";
import { Button, Input } from "@nextui-org/react";
import { Eye, EyeSlash } from "iconsax-react";
import { FaGoogle, FaGithub, FaDiscord } from "react-icons/fa";

export const LogIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pwdVisible, setPwdVisible] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignUp = async (e: FormEvent) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const res = await axios.post(
        "http://localhost:8080/api/signin",
        formData
      );
      console.log(formData);

      if (res.status === 200) {
        console.log("User Successfully logged");
        toast.success("User Successfully logged");
      }
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        if (error.response) {
          toast.error(error.response.data.error);
        } else {
          toast.error("Network Error. Please Try Again!");
        }
      } else {
        console.error("Network Error: ", error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full h-full flex justify-center items-center md:px-0 px-5 font-dmsans text-base text-secondary">
      <form
        onSubmit={handleSignUp}
        className="font-medium border px-6 py-8 rounded-2xl space-y-2 w-full md:w-96"
      >
        <div>
          <h1 className="text-xl font-medium mb-1">
            Log In to <span className="text-primary">Inkverse</span>
          </h1>
          <p className="text-sm text-zinc-500">Choose your preffered method</p>
        </div>
        <div className="flex justify-between gap-2">
          <Button color="secondary" startContent={<FaGoogle />} fullWidth>Google</Button>
          <Button color="secondary" startContent={<FaGithub />} fullWidth>GitHub</Button>
          <Button color="secondary" startContent={<FaDiscord />} fullWidth>Discord</Button>
        </div>
        <div className="flex justify-between items-center gap-2">
          <div className="bg-zinc-200 w-full h-[1px]"></div>
          <span className="text-zinc-500 uppercase text-xs">or</span>
          <div className="bg-zinc-200 w-full h-[1px]"></div>
        </div>
        <div className="space-y-8">
          <Input
            name="email"
            type="email"
            label="Email"
            placeholder="you@example.com"
            labelPlacement="outside"
            onChange={handleInputChange}
          />
          <Input
            name="password"
            type={pwdVisible ? "text" : "password"}
            label="Password"
            placeholder="*********"
            labelPlacement="outside"
            onChange={handleInputChange}
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={() => setPwdVisible(!pwdVisible)}
              >
                {pwdVisible ? (
                  <EyeSlash size={20} className="text-slate-400" />
                ) : (
                  <Eye size={20} className="text-slate-400" />
                )}
              </button>
            }
          />
        </div>
        <Button color="primary" type="submit" fullWidth isLoading={isLoading}>
          Sign Up
        </Button>
      </form>
    </section>
  );
}
