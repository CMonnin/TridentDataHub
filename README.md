# TridentDataHub

## Dataset Type Definition

### TypeScript Interface

```typescript
interface Dataset {
  id: string; // Unique identifier for the dataset
  title: string; // Human-readable dataset title
  description: string; // Detailed description of the dataset content
  datatype: string; // Category/type of research data
  institution: string; // Research institution or organization
  doi: string; // Digital Object Identifier (e.g., "10.5281/zenodo.12345")
  repository: "borealis" | "zenodo"; // Repository where data is hosted
  year?: number; // Publication year (optional)
  authors?: string[]; // List of authors (optional)
  tags?: string[]; // Keywords for categorization (optional)
}
```

## Field Descriptions

### Required Fields

| Field         | Type                     | Description                       | Example                                               |
| ------------- | ------------------------ | --------------------------------- | ----------------------------------------------------- |
| `id`          | `string`                 | Unique identifier for the dataset | `"arctic-permafrost-2024"`                            |
| `title`       | `string`                 | Human-readable title              | `"Arctic Permafrost Carbon Dynamics Analysis"`        |
| `description` | `string`                 | Detailed description of content   | `"Comprehensive dataset measuring carbon release..."` |
| `datatype`    | `string`                 | Research category                 | `"Climate Data"`, `"Genomic"`, `"Imaging"`            |
| `institution` | `string`                 | Institution name                  | `"University of British Columbia"`                    |
| `doi`         | `string`                 | DOI identifier                    | `"10.5281/zenodo.11223344"`                           |
| `repository`  | `'borealis' \| 'zenodo'` | Data repository                   | `"borealis"` or `"zenodo"`                            |

### Optional Fields

| Field     | Type       | Description      | Example                                      |
| --------- | ---------- | ---------------- | -------------------------------------------- |
| `year`    | `number`   | Publication year | `2024`                                       |
| `authors` | `string[]` | Author names     | `["Dr. Sarah Chen", "Dr. Michael Thompson"]` |
| `tags`    | `string[]` | Keywords         | `["climate-change", "carbon-cycle"]`         |

## Adding Datasets

### Location

Edit `src/data.ts` to add new datasets:

```typescript
import type { Dataset } from "./types";

export const datasets: Dataset[] = [
  // ... existing datasets

  {
    id: "unique-id-123",
    title: "Your Dataset Title",
    description: "Clear description of what the dataset contains",
    datatype: "Your Category",
    institution: "Your Institution",
    doi: "10.5281/zenodo.XXXXXXXX", // or 10.11587/XXXXXXXX for Borealis
    repository: "zenodo", // or 'borealis'
    year: 2024,
    authors: ["Author One", "Author Two"],
    tags: ["keyword1", "keyword2", "keyword3"],
  },
];
```

### DOI Format Guidelines

**Borealis DOIs:**

- Format: `10.11587/XXXXXXXX`
- Repository: `'borealis'`
- URL pattern: `https://borealisdata.ca/dataset.xhtml?persistentId=doi:{doi}`

**Zenodo DOIs:**

- Format: `10.5281/zenodo.XXXXXXXX`
- Repository: `'zenodo'`
- URL pattern: `https://doi.org/{doi}`

### Best Practices

1. **Unique IDs**: Use descriptive, unique identifiers (e.g., `"arctic-permafrost-2024"`)
2. **Descriptions**: Be specific about dataset content, scope, and methodology
3. **Datatypes**: Use consistent category names (check existing datatypes first)
4. **Institutions**: Use full, official institution names
5. **Tags**: Include 3-5 relevant keywords for discoverability
6. **DOIs**: Verify DOI format matches the repository

### Automatic Filters

The table automatically extracts unique values for:

- **Datatype filter**: Derived from all `datatype` values
- **Institution filter**: Derived from all `institution` values

New categories are automatically included when you add datasets with new values.

## Data Location

- **Type definition**: `src/types.ts`
- **Dataset data**: `src/data.ts`
- **Main component**: `src/App.tsx`
