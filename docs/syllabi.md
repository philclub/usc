---
slug: syllabi/
id: syllabi
title: Syllabi of philosophy courses at USC
hide_title: false
hide_table_of_contents: false
sidebar_label: Syllabi
description: Syllabi of philosophy courses at USC
keywords:
  - usc
  - university of southern california
  - phil
  - philosophy
  - club
  - philosophy club
  - phil club
  - Syllabi of philosophy courses at USC
image: img/p-icon-512x512.png
---

Reading syllabi for past courses is a great way to find inspiration on what to read on your own and what you can expect to read in future courses. You can find the syllabi for some past, current, and future courses at [classes.usc.edu](https://classes.usc.edu).

Below is a table of syllabi of philosophy courses at USC (more coming soon). The table is sortable.

<!-- To update the table, update `./syllabi.json` -->

import DataTable from "../src/components/DataTable";
import { columns } from "./syllabi";
import syllabi from "./syllabi.json";

<DataTable
columns={ columns }
data={ syllabi }
/>
