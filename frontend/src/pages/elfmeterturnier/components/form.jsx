import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "../../../components/ui/shadnCN/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/shadnCN/form"
import { Input } from "../../../components/ui/shadnCN/input"
import { useMutation } from "@tanstack/react-query";
import { useToast } from "../../../components/ui/shadnCN/use-toast";
import { RadioGroup, RadioGroupItemAnimated } from "../../../components/ui/shadnCNAnimated/radio-group/radio-group"
import { CheckboxAnimated } from "../../../components/ui/shadnCNAnimated/checkbox/checkbox"
import { Link } from "react-router-dom";
import { formSchema } from "./formSchema";
import { LoadingDots } from "../../../components/Elements/LoadingDots"
import { MY_URL } from "../../../lib/config"
import { RxInfoCircled } from "react-icons/rx";

const RegistrationForm = ({setDelta, setGender, setTeamId, setEmail, manTournamentIsFull, womanTournamentIsFull}) => {
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

        const response = await fetch(`${MY_URL}/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            'auth': 'BLkPz1SnQsg8GMhqGRsN'
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
    onSuccess: (responseData) => {
      console.log(responseData.message)
      if(responseData.message === "Teamname vergeben"){
        toast({
          title: "Teamname ist bereits vergeben",
          description: `Melden wähle einen anderen Teamnamen!`,
        });
      } 
      if(responseData.message === "Team erfolgreich erstellt"){
        setTeamId(responseData.teamId)
        setGender(form.getValues("gender"))
        setEmail(form.getValues("hostMail"))
        setDelta(true)
      }
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

  const tournamentFull = manTournamentIsFull && womanTournamentIsFull
  
  return (
    <Form {...form} className="w-full">
        <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col space-y-8 rounded-b-3xl"
        >
            {/** Form für Turniername & Veranstaltername */}
            <FormField
              control={form.control}
              name="teamname"
              render={({ field }) => (
                  <FormItem className="w-full">
                  <FormLabel>Teamname</FormLabel>
                  <FormControl>
                      <Input placeholder="Juventus Urin" {...field} disabled={tournamentFull} />
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
                  <FormLabel>Teamverantwortlicher</FormLabel>
                  <FormControl>
                      <Input placeholder="Max Mustermann" {...field} disabled={tournamentFull} />
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
                  <FormLabel>Emailaddresse</FormLabel>
                  <FormControl>
                      <Input
                      placeholder="example@example.de"
                      type="email"
                      {...field}
                      disabled={tournamentFull}
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
                  <FormLabel>Teamart</FormLabel>
                  <FormControl>
                      <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                      >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                          <RadioGroupItemAnimated
                              value="man"
                              disabled={manTournamentIsFull}
                              className="w-4 h-4"
                          />
                          </FormControl>
                          <FormLabel className="flex w-full flex-row justify-between font-normal">
                            <p>Männerteam / Gemischt</p>
                            <p className="text-red-400">{womanTournamentIsFull && "Turnier ist voll!" }</p>
                          </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                          <RadioGroupItemAnimated
                              value="woman"
                              disabled={womanTournamentIsFull}
                              className="w-4 h-4"
                          />
                          </FormControl>
                          <FormLabel className="flex w-full flex-row justify-between font-normal">
                            <p>Frauenteam</p>
                            <p className="text-red-400">{womanTournamentIsFull && "Turnier ist voll!" }</p>
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
                      <CheckboxAnimated
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      disabled={tournamentFull}
                      />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                      <FormLabel>
                      Ich stimme den{" "}
                      <Link to={"/elfmeterturnier/geschaftsbedingungen"} className="text-blue-600">
                          AGB
                      </Link>
                      {" zu"}
                      </FormLabel>
                  </div>
                  </FormItem>
              )}
            />
            <div className="text-[0.7rem] flex gap-4">
              <RxInfoCircled className="w-8 h-8" />
              <p>Aufgrund des Kleinunternehmerstatus gem. § 19 UStG erheben wir keine Umsatzsteuer und weisen diese daher auch nicht aus.</p>
            </div>

            <Button
              className="float-end"
              type="submit"
              disabled={mutation.isPending || tournamentFull}
            >
              {mutation.isIdle && tournamentFull ? "Turnier ist voll" : "Team anmelden"}
              {mutation.isPending && <LoadingDots />}
              {mutation.isSuccess && "Team anmelden"}
              {mutation.isError && "Es ist ein Fehler aufgetreten!"}
            </Button>
        </form>
    </Form>
  );
};

export default RegistrationForm