import React, { useState } from "react";
import person from "../assets/images/person-svg.svg";

export default function Calc() {
	const [money, setMoney] = useState(0);
	const [tip, setTip] = useState(0);
	const [people, setPeople] = useState(1);

	let customTip = parseFloat(tip) / 2;
	let total = parseFloat(money) / parseInt(people);

	function refreshPage() {
		window.location.reload(false);
	}

	return (
		<div>
			<section id="calculator">
				<h1>
					spli
					<br />
					tter
				</h1>
				<section id="calc">
					<div class="left">
						<span class="bill">bill</span>
						<form action="">
							<h3> $</h3>
							<input
								type="number"
								value={money}
								onChange={(e) => {
									setMoney(e.target.value);
								}}
								class="bill"
							/>
						</form>
						<span class="tips">select tip %</span>
						<div class="tips">
							<a
								href="#"
								onClick={() => {
									setTip((0.05 * money) / people);
								}}
								class="button"
							>
								5%
							</a>
							<a
								href="#"
								onClick={() => {
									setTip((0.1 * money) / people);
								}}
								class="button"
							>
								10%
							</a>
							<a
								href="#"
								onClick={() => {
									setTip((0.15 * money) / people);
								}}
								class="button"
							>
								15%
							</a>
							<a
								href="#"
								onClick={() => {
									setTip((0.25 * money) / people);
								}}
								class="button"
							>
								25%
							</a>
							<a
								href="#"
								onClick={() => {
									setTip((0.5 * money) / people);
								}}
								class="button"
							>
								50%
							</a>
							<input
								type="number"
								value={tip}
								onChange={(e) => {
									setTip(e.target.value);
								}}
								class="custom-tip"
							/>
						</div>
						<span>no.of people</span>
						<form action="" class="total">
							<img src={person} alt="www" />
							<input
								type="number"
								max="20"
								min="1"
								value={people}
								onChange={(e) => {
									setPeople(e.target.value);
								}}
							/>
						</form>
					</div>
					<div class="right">
						<div>
							<div class="top">
								<div>
									<span>tip amount</span>
									<small>/person</small>
								</div>
								<h2>{customTip} .$</h2>
							</div>
							<div class="top">
								<div>
									<span>total</span>
									<small>/person</small>
								</div>
								<h2>{total} .$</h2>
							</div>
						</div>
						<a href="#" onClick={refreshPage} class="button">
							reset
						</a>
					</div>
				</section>
			</section>
		</div>
	);
}
