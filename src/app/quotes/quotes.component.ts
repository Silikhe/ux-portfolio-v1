import { Component, OnInit } from "@angular/core";
import { Quote } from "../quote";

@Component({
  selector: "app-quotes",
  templateUrl: "./quotes.component.html",
  styleUrls: ["./quotes.component.css"],
})
export class QuotesComponent implements OnInit {
  title = "Do you want to add  quotes";
  quotes: Quote[] = [
    new Quote(1, "Silas IS sil.", "Silikhe", new Date(2021, 7, 12), 0, 0),
    new Quote(
      2,
      "Silikhe",
      "Technology…",
      "Silas",
      "Max Frisch",
      new Date(2021, 7, 10),
      0,
      0
    ),
    new Quote(
      3,
      "Silas",
      "The great myth",
      "The great myth of our communication.",
      "Silikhe",
      new Date(2021, 7, 8),
      0,
      0
    ),
    new Quote(
      4,
      "Sila",
      "Hater",
      "People will always have their opinion on you despite who you are and what your capable of.",
      "Ana Chable",
      new Date(2021, 7, 7),
      0,
      0
    ),
    new Quote(
      4,
      "Silikhe",
      "Life",
      "The purpose of happy..",
      "Silas Silikhe",
      new Date(2021, 7, 7),
      0,
      0
    ),
  ];
  get sortQuotes() {
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    });
  }

  addedQuote(quote: any) {
    let arraysize = this.quotes.length;
    quote.id = arraysize + 1;
    quote.completeDate = new Date(quote.completeDate);
    this.quotes.push(quote);
  }
  
  quoteDelete(isRead: any, index: any) {
    if (isRead) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`);
      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

  displayInfo(index: any) {
    this.quotes[index].showInfo = !this.quotes[index].showInfo;
  }
  constructor() {}

  ngOnInit() {}
}
