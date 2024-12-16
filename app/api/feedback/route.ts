import { FeedbackType } from "@/app/components/feedback";
import { NextResponse } from "next/server";

export async function GET() {
  const feedbacks: FeedbackType[] = [
    {
      id: 1,
      rate: 5,
      writer: "Sarah M.",
      exp: `I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.`,
    },
    {
      id: 2,
      rate: 5,
      writer: "Alex K.",
      exp: `Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.`,
    },
    {
      id: 3,
      rate: 5,
      writer: "James L.",
      exp: `As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.`,
    },

    {
      id: 4,
      rate: 5,
      writer: "Mort D.",
      exp: `Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of nt with the latest trends.`,
    },
    {
      id: 5,
      rate: 5,
      writer: "Aein M.",
      exp: `used to be a challenge until I discovered Shop.co. The range of options they offe of clothes is not only diverse but also on-point with the latest trends.`,
    },
    {
      id: 6,
      rate: 5,
      writer: "Karim S.",
      exp: `by the quality and style of the clothes I received from Shop.co. From casual wear to elegant co. The selection of clothes is not only diverse but also on-point with the latest trends.`,
    },
  ];

  return NextResponse.json(feedbacks);
}
