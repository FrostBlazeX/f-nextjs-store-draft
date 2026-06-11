import db from "@/utils/db";
import { auth } from "@clerk/nextjs/server";

export const fetchCartItems = async () => {
  const { userId } = await auth();

  if (!userId) return 0;

  const cart = await db.cart.findFirst({
    where: {
      clerkId: userId,
    },
    select: {
      numItemsInCart: true,
    },
  });

  return cart?.numItemsInCart ?? 0;
};

// export const fetchCartItems = async () => {
//   const { userId } = await auth();
//   const cart = await db.cart.findFirst({
//     where: {
//       clerkId: userId ?? "",
//     },
//     select: {
//       numItemsInCart: true,
//     },
//   });
//   return cart?.numItemsInCart || 0;
// };
