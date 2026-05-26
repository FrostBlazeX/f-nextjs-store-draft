"use client";

import { useFormState } from "react-dom";
import { useEffect, useActionState } from "react";
import { toast } from "sonner";
import { actionFunction } from "@/utils/types";
// import { de } from "@faker-js/faker";

const initialState = {
  message: "",
};

function FormContainer({
  action,
  children,
}: {
  action: actionFunction;
  children: React.ReactNode;
}) {
  const [state, formAction] = useActionState(action, initialState);
  useEffect(() => {
    if (state.message) {
      toast(state.message);
    }
  }, [state]);
  return <form action={formAction}>{children}</form>;
}
export default FormContainer;
