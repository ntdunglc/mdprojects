import React from "react";
import BigCard from './bigCard';
import SmallCard from './smallCard';
import { MDBContainer, MDBCol, MDBCard, MDBIcon, MDBBtn } from "mdbreact";

function CardItem() {
    return (
        <section className="text-center my-5">
            <h2 className="h1-responsive font-weight-bold my-5">
                Have fun :)
            </h2>

            <MDBContainer className="d-flex flex-wrap">
                <BigCard
                    name="Amdahl's Law"
                    describe="In computer architecture, Amdahl's law (or Amdahl's argument) is a formula which gives the theoretical speedup in latency of the execution of a task at fixed workload that can be expected of a system whose resources are improved. It is named after computer scientist Gene Amdahl, and was presented at the AFIPS Spring Joint Computer Conference in 1967."
                />

                <SmallCard
                    name="Little's Law"
                    describe="In queueing theory, a discipline within the mathematical theory of probability, Little's result, theorem, lemma, law, or formula is a theorem by John Little which states that the long-term average number L of customers in a stationary system is equal to the long-term average effective arrival rate λ multiplied by the average time W that a customer spends in the system"
                />

                <SmallCard
                    name="Common Latency Numbers"
                    describe="In queueing theory, a discipline within the mathematical theory of probability, Little's result, theorem, lemma, law, or formula is a theorem by John Little which states that the long-term average number L of customers in a stationary system is equal to the long-term average effective arrival rate λ multiplied by the average time W that a customer spends in the system"
                />
            </MDBContainer>
        </section>
    );
}

export default CardItem;