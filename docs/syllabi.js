import React from 'react';

/**
 * Please add courses in numerical order by course number (lowest above)
 * For the same course, add them by reverse term number (highest above)
 */

// ----------------------------------------------------------------------------
// DataTable column definition
// ----------------------------------------------------------------------------
export const columns = [
  {
    Header: 'Course',
    accessor: 'course_number',
    className: 'data-table left',
    Cell: ({ cell: { value }, row: { original } }) => (
      <a href={`${original.syllabus}`}>PHIL {value}</a>
    ),
  },
  {
    Header: 'Course Name',
    accessor: 'course_name',
    className: 'data-table left',
  },
  {
    Header: 'Instructor/Professor',
    accessor: 'instructor',
    className: 'data-table left',
    Cell: ({ cell: { value }, row: { original } }) => (
      <a href={`${original.instructor_link}`}>{value}</a>
    ),
  },
  {
    Header: 'Term',
    accessor: 'term',
    className: 'data-table left',
  },
];
