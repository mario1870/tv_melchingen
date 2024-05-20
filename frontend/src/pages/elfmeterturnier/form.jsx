import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "../../components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form"
import { Input } from "../../components/ui/input"
import { useMutation } from "@tanstack/react-query";
import { useToast } from "../../components/ui/use-toast";
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group"
import { Checkbox } from "../../components/ui/checkbox"
import { Link } from "react-router-dom";
import { formSchema } from "./formSchema";
import { LoadingDots } from "../../components/Elements/LoadingDots"
import { MY_URL } from "../../lib/config"
 
const RegistrationForm = () => {
  const { toast } = useToast();

    // 1. Define your form.
    const form = useForm({
      resolver: zodResolver(formSchema),
      defaultValues: {
        teamname: "",
        hostName: "",
        hostEmail: "",
        payment: false,
        gender: undefined,
        acceptAGB: false,
      },
    })
   
  // 2. Define a submit handler.
  const mutation = useMutation({
    mutationFn: async (data) => {
      try {
        const requestData = { ...data };

        const response = await fetch(`${MY_URL}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        });

        if (!response.ok) throw new Error("Failed to create tournament");

        const responseData = await response.json();

        return responseData;
      } catch (error) {
        throw new Error("Error creating team: " + error.message);
      }
    },
    onSuccess: () => {
      console.log("WWW")
    },
    onError: (error) => {
      toast({
        title: "Es ist ein Fehler bei der Anmeldung aufgetreten",
        description: `Melden Sie sich bitte beim Support (${error.message})`,
      });
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };
  
  return (
    <Form {...form} className="w-full">
        <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col space-y-8 rounded-b-3xl px-6 pb-12 pt-6 md:px-12"
        >
            {/** Form für Turniername & Veranstaltername */}
            <FormField
              control={form.control}
              name="teamname"
              render={({ field }) => (
                  <FormItem className="w-full">
                  <FormLabel>Geben Sie ihren Teamnamen ein</FormLabel>
                  <FormControl>
                      <Input placeholder="Juventus Urin" {...field} />
                  </FormControl>
                  <FormMessage />
                  </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="hostName"
              render={({ field }) => (
                  <FormItem className="w-full">
                  <FormLabel>Geben Sie ihren Namen ein</FormLabel>
                  <FormControl>
                      <Input placeholder="Max Mustermann" {...field} />
                  </FormControl>
                  <FormMessage />
                  </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="hostEmail"
              render={({ field }) => (
                  <FormItem className="w-full">
                  <FormLabel>Geben Sie ihre Emailadresse ein</FormLabel>
                  <FormControl>
                      <Input
                      placeholder="example@example.de"
                      type="email"
                      {...field}
                      />
                  </FormControl>
                  <FormMessage />
                  </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                  <FormItem className="space-y-3">
                  <FormLabel>Wähle die Teamart aus</FormLabel>
                  <FormControl>
                      <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                      >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                          <RadioGroupItem
                              value="man"
                          />
                          </FormControl>
                          <FormLabel className="flex w-full flex-row justify-between font-normal">
                          Männerteam / Gemischtes Team{" "}

                          </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                          <RadioGroupItem
                              value="woman"
                          />
                          </FormControl>
                          <FormLabel className="flex w-full flex-row justify-between font-normal">
                          Frauenteam{" "}
                          </FormLabel>
                      </FormItem>
                      </RadioGroup>
                  </FormControl>
                  <FormMessage />
                  </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="acceptAGB"
              render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md">
                  <FormControl>
                      <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                      <FormLabel>
                      Accept{" "}
                      <Link to={"/legal"} className="text-blue-600">
                          terms and conditions
                      </Link>
                      </FormLabel>
                  </div>
                  </FormItem>
              )}
            />

            <Button
              className="float-end"
              type="submit"
              disabled={mutation.isSuccess || mutation.isPending}
            >
              {mutation.isIdle && "Team anmelden"}
              {mutation.isPending && <LoadingDots />}
              {mutation.isSuccess && "Vielen Dank für ihre Anmeldung!"}
              {mutation.isError && "Es ist ein Fehler aufgetreten!"}
            </Button>
        </form>
    </Form>
  );
};

export default RegistrationForm