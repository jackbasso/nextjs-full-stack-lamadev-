import Post from "./../../../models/Post";
import connect from "../../utils/db";
import { NextResponse } from "next/server";


export const GET = async (request) => {
  //getting username from the url for dashboard page
  const url = new URL(request.url);
  const username = url.searchParams.get("username");


  //fetch data from DB
  try {
    await connect();
    // Get all posts
    // const posts = await Post.find();
    // If there a username get only that if not get all the posts
    const posts = await Post.find(username && {username}); //
    return new NextResponse(JSON.stringify(posts), {status: 200});
  } catch (error) {
    return new NextResponse("Database error!", {status: 500});
  }
  };

  export const POST = async (request) => {
    const body = await request.json();
  
    const newPost = new Post(body);
  
    try {
      await connect();
  
      await newPost.save();
  
      return new NextResponse("Post has been created", { status: 201 });
    } catch (err) {
      return new NextResponse("Database Error", { status: 500 });
    }
  };  