'use client';
import { ResponseCollectionMeta } from '@sharknado/cms-api';
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../select';
import { GridIcon, ListIcon } from 'lucide-react';
import { Switch } from '../switch';
// import { GridIcon, ListIcon } from '@shadcn/icons'; // Import the icons from ShadCN

interface SearchResultsToolbarProps {
  isGridView: boolean;
  searchMeta: ResponseCollectionMeta | null | undefined;
  updateMeta: Dispatch<
    SetStateAction<ResponseCollectionMeta | null | undefined>
  >;
  updateView: Dispatch<SetStateAction<boolean>>;
  // isGridView: boolean;
  // onPerPageChange: (newPerPage: number) => void;
  // onToggleView: (isGridView: boolean) => void;
  // onPageChange: (newPage: number) => void;
}

interface PaginationInfoProps {
  searchMeta: ResponseCollectionMeta | null | undefined;
}

const PaginationInfo: React.FC<PaginationInfoProps> = ({ searchMeta }) => {
  const [page, setPage] = useState<number>(searchMeta?.pagination.page ?? 1);
  const [pageSize, setPageSize] = useState<number>(
    searchMeta?.pagination.pageSize ?? 10
  );
  const [totalResults, setTotalResults] = useState<number>(
    searchMeta?.pagination.total ?? 0
  );

  useEffect(() => {
    setPageSize(searchMeta?.pagination.pageSize ?? 10);
    setPage(searchMeta?.pagination.page ?? 1);
    setTotalResults(searchMeta?.pagination.total ?? 0);
  }, [searchMeta]);

  const startResult = useMemo(
    () => (page - 1) * pageSize + 1,
    [page, pageSize]
  );
  const endResult = useMemo(
    () => Math.min(page * pageSize, totalResults),
    [page, pageSize, totalResults]
  );

  return (
    <div className="flex items-center">
      <span className="mr-2 text-gray-700">
        {startResult}-{endResult} of {totalResults}
      </span>
      <span className="ml-4 text-gray-700">
        Page {page} of {Math.ceil(totalResults / pageSize)}
      </span>
    </div>
  );
};

const SearchResultsToolbar: React.FC<SearchResultsToolbarProps> = ({
  searchMeta,
  updateMeta,
  isGridView,
  updateView,
}) => {
  const handlePerPageChange = (value: string) => {
    const newSearchMeta = JSON.parse(JSON.stringify(searchMeta));

    console.log('newSearchMeta', newSearchMeta);

    if (newSearchMeta?.pagination?.pageSize) {
      newSearchMeta.pagination.pageSize = parseInt(value);
    }

    updateMeta(newSearchMeta);
  };

  return (
    <div className="flex items-center justify-between p-4 bg-gray-100 rounded-md shadow-md">
      <PaginationInfo searchMeta={searchMeta} />

      <div className="flex items-center">
        <span className="mr-2 text-gray-700">Results per page:</span>

        <Select
          onValueChange={(val) => handlePerPageChange(val)}
          defaultValue={searchMeta?.pagination.pageSize.toString()}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="10" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1</SelectItem>
            <SelectItem value="2">2</SelectItem>
            <SelectItem value="5">5</SelectItem>
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="20">20</SelectItem>
            <SelectItem value="50">50</SelectItem>
            <SelectItem value="100">100</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center">
        <ListIcon
          className={`w-5 h-5 mr-2`}
          color={isGridView ? 'grey' : 'black'}
        />
        <Switch
          id="view-switch"
          checked={isGridView}
          onCheckedChange={() => updateView(!isGridView)}
        />
        <GridIcon
          className="w-5 h-5 ml-2"
          color={isGridView ? 'black' : 'grey'}
        />
      </div>
    </div>
  );
};

export default SearchResultsToolbar;
