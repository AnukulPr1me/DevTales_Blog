import React from "react";
import { Link } from "react-router-dom";
import { Button, Label, TextInput } from "flowbite-react";

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center">
        {/*left*/}
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span>Anukul Chandra</span>
          </Link>
          <p className="text-sm mt-5">
            "This is a blog app for posting technology and IT related blogs."
          </p>
        </div>
        {/*right*/}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="your username" />
              <TextInput type="text" placeholder="username" id="username" />
            </div>
            <div>
              <Label value="your email" />
              <TextInput type="text" placeholder="name@example.com" id="email" />
            </div>
            <div>
              <Label value="your password" />
              <TextInput type="text" placeholder="password" id="password" />
            </div>
            <Button type="submit">
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Already have an Account?</span>
            <Link to="/sign-in" className="text-blue-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
