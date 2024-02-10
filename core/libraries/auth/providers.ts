import { NextAuthConfig } from "next-auth";
import discord from "next-auth/providers/discord";
import github from "next-auth/providers/github";
import google from "next-auth/providers/google";

const providers: NextAuthConfig["providers"] = [github, google, discord];

export default providers;
