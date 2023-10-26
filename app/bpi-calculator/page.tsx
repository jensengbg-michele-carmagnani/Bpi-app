"use client";

import { Button } from "@/components/ui/button";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import Container from "@/components/Container";
import { cn } from "@/lib/utils";
import Body from "@/public/images/body";

import { Textarea } from "@/components/ui/textarea";
import Footer from "../../components/Footer";
import { MouseEvent, useEffect } from "react";
import useZStore from "../hooks/useStore";

import InputContainer from "@/components/InputContainer";
import Heading from "@/components/heading";
import { Results } from "@/components/results/Results";
import { STEPS } from "@/typings";


const BpiCalculator = () => {
  const { step, onNext, resetStep } = useZStore();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      body: "",
      maxPain24h: "0",
      minPain24h: "0",
      avaragePain24h: "0",
      instantPain: "0",
      therapyDescribe: "",
      painRelieveTherapy24h: "0",
      generalLife: "0",
      mood: "0",
      walkingCapability: "0",
      ordinaryWorkTime: "0",
      relationship: "0",
      sleeping: "0",
      enjoyLife: "0",
    },
  });

  const maxPain24h = watch("maxPain24h");
  const minPain24h = watch("minPain24h");
  const avaragePain24h = watch("avaragePain24h");
  const instantPain = watch("instantPain");
  const therapyDescribe = watch("therapyDescribe");
  const painRelieveTherapy24h = watch("painRelieveTherapy24h");
  const generalLife = watch("generalLife");
  const mood = watch("mood");
  const walkingCapability = watch("walkingCapability");
  const ordinaryWorkTime = watch("ordinaryWorkTime");
  const relationship = watch("relationship");
  const sleeping = watch("sleeping");
  const enjoyLife = watch("enjoyLife");

  const selectedImageHandler = (e: any) => {
    e.preventDefault();
    const target = e.target;
    if (!target.style.fill) {
      target.style.fill = "purple";
    } else {
      target.style.fill = "";
    }
  };

  useEffect(() => {
    () => resetStep();
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log("data", await data);
    if (step !== STEPS.RESULTS) {
      return onNext();
    } else {
      reset();
      resetStep();
    }
  };

  let bodyContent = (
    <>
      <section>
        <p>
          Inizialmente sviluppato per misurare il dolore nei pazienti affetti da
          un tumore, il Brief Pain Inventory (BPI) si è affermato come uno dei
          questionari più utilizzati nella misura del dolore.<sup>1</sup> Tra la
          gamma di condizioni per cui è utilizzato si annoverano condizioni
          muscoloscheletriche, disturbi depressivi e il dolore associato alla
          chirurgia<sup>1</sup>.
        </p>
      </section>

      <section>
        <p>
          Il BPI è un questionario che può essere autosomministrato al paziente
          <sup>1</sup>. Nella sua forma breve (più comunemente usata) si
          sviluppa in due sezioni che permettono di valutare<sup>1</sup>:
        </p>
        <p>
          <ul className="list-disc pl-6">
            <li>
              l’intensità del dolore in diverse situazioni (dimensione
              sensitiva)
            </li>
            <li>
              il suo livello di interferenza sui vari aspetti della vita del
              paziente (dimensione affettiva) L’interferenza viene a sua volta
              suddivisa in<sup>1</sup>:
              <ul className="list-[square] pl-6">
                <li>interferenza con gli aspetti pratici della vita</li>
                <li>interferenza con le relazioni affettive</li>
              </ul>
            </li>
          </ul>
        </p>
      </section>

      <section>
        <p>
          Il PBI è stato ideato e sviluppato in modo da essere facilmente
          comprensibile e richiedere spiegazioni minime per la sua compilazione,
          allo scopo di poter essere utilizzato da un ampio numero di pazienti.
          <sup>2</sup>
        </p>
      </section>
      <div className="flex justify-center">
        <Button className={cn("w-1/2 ")} onClick={onSubmit}>
          Calcola Punteggio
        </Button>
      </div>
    </>
  );

  if (step === STEPS.LOCATIONPAIN) {
    bodyContent = (
      <>
        <Body
          {...register("body")}
          width={"700"}
          height={"700"}
          onClick={(e: MouseEvent<SVGSVGElement, globalThis.MouseEvent>) =>
            selectedImageHandler(e)
          }
          className={cn(`cursor-pointer  object-cover w-full `)}
        />
        <Button className={cn("w-full")} onClick={onSubmit}>
          next
        </Button>
      </>
    );
  }

  if (step === STEPS.PAINASSESSMENT) {
    bodyContent = (
      <div className="grid grid-cols-1 gap-3">
        <InputContainer
          id={"maxPain24h"}
          type={"range"}
          className={"p-0"}
          value={maxPain24h}
          register={register}
        >
          <Heading
            className="pl-2"
            center={false}
            subtitle="2. Valuti il suo dolore indicando il numero che meglio descrive
            l’intensità del peggior dolore provato nelle ultime 24 ore*"
          />
        </InputContainer>

        <InputContainer
          id={"minPain24h"}
          type={"range"}
          className={"p-0"}
          value={minPain24h}
          register={register}
        >
          <Heading
            className="pl-2"
            center={false}
            subtitle="3. Valuti il suo dolore indicando il numero che meglio descrive
            l’intensità del dolore più lieve provato nelle ultime 24 ore*"
          />
        </InputContainer>

        <InputContainer
          id={"avaragePain24h"}
          type={"range"}
          className={"p-0"}
          value={avaragePain24h}
          register={register}
        >
          <Heading
            className="pl-2"
            center={false}
            subtitle=" 4. Valuti il suo dolore indicando il numero che meglio descrive
            l’intensità media del dolore nelle ultime 24 ore*"
          />
        </InputContainer>

        <InputContainer
          id={"instantPain"}
          type={"range"}
          className={"p-0"}
          value={instantPain}
          register={register}
        >
          <Heading
            className="pl-2"
            center={false}
            subtitle="5. Valuti il suo dolore indicando il numero che meglio descrive
            quanto dolore prova in questo momento*"
          />
        </InputContainer>

        <section className="grid grid-cols-2">
          <Heading
            subtitle="6. Quali terapie o farmaci sta ricevendo per il suo dolore?
            ha avuto**"
          />
          <div className="flex justify-center items-center space-x-4 ">
            <Textarea
              className="p-1"
              id={"therapyDescribe"}
              value={therapyDescribe}
              {...register("therapyDescribe")}
            />
          </div>
        </section>
        <InputContainer
          id={"painRelieveTherapy24h"}
          type={"range"}
          className={"p-0"}
          value={painRelieveTherapy24h}
          register={register}
        >
          <Heading
            className="pl-2"
            center={false}
            subtitle="7. Nelle ultime 24 ore quanto sollievo ha tratto dalle terapie o dai
            farmaci? Indichi la percentuale che meglio descrive quanto sollievo
            ha avuto**"
          />
        </InputContainer>
      </div>
    );
  }
  if (step === STEPS.CAPABILITIESASSESSMENT) {
    bodyContent = (
      <div className="grid grid-cols-1 gap-3">
        <h2 className="text-xl py-4 ">
          8. Indichi il numero che meglio descrive quanto il dolore ha
          interferito, nelle ultime 24 ore, con:***
        </h2>
        <InputContainer
          id="generalLife"
          type={"range"}
          className={"p-0"}
          value={generalLife}
          register={register}
        >
          <Heading
            className="pl-2"
            center={false}
            subtitle="a.la sua attività in generale"
          />
        </InputContainer>
        <InputContainer
          id="mood"
          type={"range"}
          className={"p-0"}
          value={mood}
          register={register}
        >
          <Heading className="pl-2" center={false} subtitle="b. il suo umore" />
        </InputContainer>
        <InputContainer
          id="walkingCapability"
          type={"range"}
          className={"p-0"}
          value={walkingCapability}
          register={register}
        >
          <Heading
            className="pl-2"
            center={false}
            subtitle="c. la sua capacità di camminare"
          />
        </InputContainer>
        <InputContainer
          id="ordinaryWorkTime"
          type={"range"}
          className={"p-0"}
          value={ordinaryWorkTime}
          register={register}
        >
          <Heading
            className="pl-2"
            center={false}
            subtitle="d. la sua normale capacità lavorativa (sia in casa sia fuori)"
          />
        </InputContainer>
        <InputContainer
          id="relationship"
          type={"range"}
          className={"p-0"}
          value={relationship}
          register={register}
        >
          <Heading
            className="pl-2"
            center={false}
            subtitle="e. le sue relazioni con altre persone"
          />
        </InputContainer>
        <InputContainer
          id="sleeping"
          type={"range"}
          className={"p-0"}
          value={sleeping}
          register={register}
        >
          <Heading className="pl-2" center={false} subtitle="f. il sonno" />
        </InputContainer>
        <InputContainer
          id="enjoyLife"
          type={"range"}
          className={"p-0"}
          value={enjoyLife}
          register={register}
        >
          <Heading
            className="pl-2"
            center={false}
            subtitle="g. Il suo piacere di vivere"
          />
        </InputContainer>
      </div>
    );
  }
  if (step === STEPS.RESULTS) {
    bodyContent = <Results />;
  }

  return (
    <Container className={cn("space-y-10 text-xl py-4 ")}>
      {bodyContent}
      {step >= 2 && (
        <Footer
          onSubmit={handleSubmit(onSubmit)}
          title={`${step === STEPS.RESULTS ? "RIPROVA " : "CONTINUA"}`}
        />
      )}
    </Container>
  );
};

export default BpiCalculator;
